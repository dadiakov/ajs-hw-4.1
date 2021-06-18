export default function healthReturn(char) {
  if (char.health > 50) {
    return 'healthy';
  } if (char.health >= 15 && char.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
