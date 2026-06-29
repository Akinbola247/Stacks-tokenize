export function isContractPrincipal(principal: string): boolean {
  return /^S[0-9A-Z]{38,39}\.[a-z][a-z0-9-]*$/.test(principal);
}
