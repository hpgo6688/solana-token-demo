import {
  Connection,
  Keypair,
  SystemProgram,
  Transaction,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";
import bs58 from 'bs58'
import { describe, test } from 'vitest';

describe('Transfer SOL', () => {
  test('should transfer sol successfully', async () => {
    const privateKey = process.env.VITE_PRIVATE_KEY;
    const fromKeypair = Keypair.fromSecretKey(bs58.decode(privateKey!));
    const toPubkey = new PublicKey("FRvWiiyKoDFD4EF4k92AQkio61kuKZHhkgqzaMeSj9Ab");

    const connection = new Connection(
      "https://api.devnet.solana.com",
      "confirmed",
    );
    const lamportsToSend = 1_00;

    const transferTransaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromKeypair.publicKey,
        toPubkey,
        lamports: lamportsToSend,
      }),
    );

    const Signature = await sendAndConfirmTransaction(connection, transferTransaction, [
      fromKeypair,
    ]);
    console.log(`https://explorer.solana.com/tx/${Signature}?cluster=devnet`)
  }, 60_000);
});
