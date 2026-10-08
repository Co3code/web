export async function onRequest(context) {
  const GITHUB_URL = "https://github.com/Co3code/capstone2/releases/download/v1.9.0/aifoundit.apk";

  const response = await fetch(GITHUB_URL, {
    headers: { "User-Agent": "Cloudflare-Pages-Function" },
    redirect: "follow", 
  });

  if (!response.ok) {
    return new Response(`File not found (status: ${response.status})`, { status: 404 });
  }

  return new Response(response.body, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="AIFoundIT.apk"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}