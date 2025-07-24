type Hit = { timestamp: number };

const limitMap = new Map<string, Hit[]>();

export function checkLimit(ip: string, maxHits: number, windowMs: number) {
  const now = Date.now();
  const hits = limitMap.get(ip) || [];

  // Ne garder que les hits récents (dans la fenêtre de temps)
  const recentHits = hits.filter(hit => now - hit.timestamp < windowMs);
  recentHits.push({ timestamp: now });

  limitMap.set(ip, recentHits);

  return recentHits.length <= maxHits;
}
