function FindProxyForURL(url, host) {
  if (
      dnsDomainIs(host, ".youtube.com") ||
      dnsDomainIs(host, ".youtube-nocookie.com") ||
      dnsDomainIs(host, ".ytimg.com") ||
      dnsDomainIs(host, ".googlevideo.com") ||
      host === "youtu.be" ||
      shExpMatch(host, "*.youtube.*")     // couvre sous-domaines et TLD variants
  ) {
    return "PROXY billbob.ovh:3128";
  // Tout le reste passe par le proxy
  return "DIRECT";
}
