function FindProxyForURL(url, host) {
  if (
      dnsDomainIs(host, ".exemple.com") ||
      dnsDomainIs(host, ".freebox.fr")
  ) {
    return "DIRECT";
  // Tout le reste passe par le proxy
  return "PROXY billbob.ovh:3129";
}
