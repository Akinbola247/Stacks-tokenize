import { describe, expect, it } from 'vitest';
import { initSimnet } from '@stacks/clarinet-sdk';
import { Cl } from '@stacks/transactions';

const simnet = await initSimnet();
const accounts = simnet.getAccounts();
const deployer = accounts.get('deployer')!;
const wallet1 = accounts.get('wallet_1')!;

describe('token FT', () => {
  it('mints tokens', () => {
    const { result } = simnet.callPublicFn('token', 'mint', [Cl.uint(100), Cl.standardPrincipal(deployer)], deployer);
    expect(result.value.type).toBe('true');
  });
});
