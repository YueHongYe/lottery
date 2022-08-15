import { BN, Program } from "@project-serum/anchor";
import { SolanaRaffles } from '../context/solana_raffles';
import {
    PublicKey,
    Keypair,
    SystemProgram,
    SYSVAR_RENT_PUBKEY,
    TransactionInstruction,
    Connection
} from '@solana/web3.js';
import { ASSOCIATED_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
import { ASSOCIATED_TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { getAtaForMint } from "./accounts";
import {SignerWalletAdapterProps} from "@solana/wallet-adapter-base";

export const createRaffle = async (
    program: Program<SolanaRaffles>,
    fee: number,
    title: string,
    description: string,
    ends: number,
    authority: PublicKey,
    raffle: PublicKey,
    winNftUrl: string,
    winNftPubkey: PublicKey,
    winners: number,
    mint: PublicKey,
    nftMint: PublicKey
) => {

    const ticket_price = new BN(fee);
    const ends_at = new BN(ends)
    const accept = new PublicKey("ycVaTvU8iBoEcuunXMZtpzNXxDjA8TR5XMgWJWWbEQL");
    const [authorityAta, _1] = await  getAtaForMint(authority, nftMint);
    const [acceptAta, _2] = await getAtaForMint(accept, nftMint);
    return await program.methods
    .createRaffle(
        ticket_price,
        ends_at,
        title,
        description,
        winNftUrl,
        winNftPubkey,
        winners <= 0 ? 1 : winners,
        0, // requiures authority
    )
    .accounts({
        raffle: raffle,
        authority: authority,
        systemProgram: SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        tokenMint: mint,
        rent: SYSVAR_RENT_PUBKEY,
        nftMint: nftMint,
        accept:accept,
        authorityAta: authorityAta,
        acceptAta: acceptAta,
    })
    .instruction();
}

export const closeRaffle = async (
    program: Program<SolanaRaffles>,
    authority: PublicKey,
    raffle: PublicKey
) => {
    return await program.methods
    .endRaffle()
    .accounts({
        raffle: raffle,
        authority: authority
    })
    .instruction();
}

export const purchaseTicket = async (
    program: Program<SolanaRaffles>,
    authority: PublicKey,
    participant: PublicKey,
    raffle: PublicKey,
    ticket: PublicKey,
    mint: PublicKey
) => {

    const [participantAta, _1] = await  getAtaForMint(participant, mint);
    const [authorityAta, _2] = await getAtaForMint(authority, mint);

    return await program.methods
    .purchaseTicket()
    .accounts({
        authority: authority,
        participant: participant,
        raffle: raffle,
        ticket: ticket,
        systemProgram: SystemProgram.programId,
        tokenMint: mint,
        tokenProgram: TOKEN_PROGRAM_ID,
        associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
        rent: SYSVAR_RENT_PUBKEY,

        participantAta: participantAta,
        authorityAta: authorityAta
    })
    .instruction();
}

export const createRaffleWin = async (
    program: Program<SolanaRaffles>,
    authority: PublicKey,
    winWallet: PublicKey,
    raffle: PublicKey,
    raffleWin: PublicKey,
    mint: PublicKey,
) => {
    const [authorityAta, _1] = await getAtaForMint(authority, mint);
    const [winWalletAta, _2] = await getAtaForMint(winWallet, mint);
    console.log("authority",authority.toBase58())
    console.log("winWallet",winWallet.toBase58())
    console.log("raffle",raffle.toBase58())
    console.log("raffleWin",raffleWin.toBase58())
    console.log("mint",mint.toBase58())
    console.log("authorityAta",authorityAta.toBase58())
    console.log("winWalletAta",winWalletAta.toBase58())

    return await program.methods
        .createRaffleWin()
        .accounts({
            authority: authority,
            raffle: raffle,
            tokenProgram: TOKEN_PROGRAM_ID,
            systemProgram: SystemProgram.programId,
            associatedTokenProgram: ASSOCIATED_TOKEN_PROGRAM_ID,
            winWallet: winWallet,
            raffleWin: raffleWin,
            authorityAta: authorityAta,
            winWalletAta: winWalletAta,
            nftMint: mint,
            rent: SYSVAR_RENT_PUBKEY,
        })
        .instruction();
};


