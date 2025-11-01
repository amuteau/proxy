function FindProxyForURL(url, host) {
  // Connexion directe pour les domaines locaux
  if (
      dnsDomainIs(host, ".exemple.com") ||
      dnsDomainIs(host, ".freebox.fr")
  ) {
    return "DIRECT";
  }
  
  // Tout le reste passe par le proxy
  return "PROXY billbob.ovh:3129";
}
