function FindProxyForURL(url, host) {
  // Connexion directe pour localhost
  if (isPlainHostName(host) ||
      shExpMatch(host, "localhost") ||
      shExpMatch(host, "127.0.0.1"))
    return "DIRECT";
  
  // Connexion directe pour les domaines locaux
  if (dnsDomainIs(host, ".exemple.com") ||
      dnsDomainIs(host, ".freebox.fr") ||
      dnsDomainIs(host, ".local"))
    return "DIRECT";
  
  // Connexion directe pour les réseaux privés
  if (isInNet(host, "10.0.0.0", "255.0.0.0") ||
      isInNet(host, "172.16.0.0", "255.240.0.0") ||
      isInNet(host, "192.168.0.0", "255.255.0.0"))
    return "DIRECT";
  
  // Tout le reste passe par le proxy avec fallback
  return "PROXY billbob.ovh:3129; DIRECT";
}
