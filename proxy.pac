function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".youtube.com")) {
    // Route YouTube via ton proxy Squid
    return "PROXY billbob.ovh:3128";
  }
  // Tout le reste passe par le proxy
  return "DIRECT";
}
