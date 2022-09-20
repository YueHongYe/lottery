export type SolanaRaffles = {
  "version": "0.1.0",
  "name": "solana_raffles",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "winNftUrl",
          "type": "string"
        },
        {
          "name": "winners",
          "type": "u8"
        },
        {
          "name": "nftEscrowedBump",
          "type": "u8"
        },
        {
          "name": "tokenEscrowedBump",
          "type": "u8"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "createdDate",
          "type": "i64"
        },
        {
          "name": "price",
          "type": "u8"
        },
        {
          "name": "ifRentNft",
          "type": "u8"
        },
        {
          "name": "rentNft",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "purchaseTicket",
      "accounts": [
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participantAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "endRaffle",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeTicketAccount",
      "accounts": [
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRaffleWin",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winWallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleWin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winWalletAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRentNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNft",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftName",
          "type": "string"
        },
        {
          "name": "nftImage",
          "type": "string"
        },
        {
          "name": "rentNftEscrowedAtaBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeRentNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sendRaffleToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platform",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sendRaffleRentNftToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftAuthorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRentNftCount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftCount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "createdDate",
          "type": "i64"
        },
        {
          "name": "rentNft",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateRentNftCount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftCount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "winNftUrl",
            "type": "string"
          },
          {
            "name": "winNftPubkey",
            "type": "publicKey"
          },
          {
            "name": "winners",
            "type": "u8"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "nftEscrowedBump",
            "type": "u8"
          },
          {
            "name": "nftEscrowed",
            "type": "publicKey"
          },
          {
            "name": "tokenEscrowed",
            "type": "publicKey"
          },
          {
            "name": "authorityAta",
            "type": "publicKey"
          },
          {
            "name": "endDate",
            "type": "i64"
          },
          {
            "name": "createdDate",
            "type": "i64"
          },
          {
            "name": "price",
            "type": "u8"
          },
          {
            "name": "tokenEscrowedBump",
            "type": "u8"
          },
          {
            "name": "ifRentNft",
            "type": "u8"
          },
          {
            "name": "rentNft",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "participant",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "rentNft",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftName",
            "type": "string"
          },
          {
            "name": "nftImage",
            "type": "string"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "authorityAta",
            "type": "publicKey"
          },
          {
            "name": "rentNftEscrowedAta",
            "type": "publicKey"
          },
          {
            "name": "rentNftEscrowedAtaBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rentNftCount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rentNft",
            "type": "publicKey"
          },
          {
            "name": "createdDate",
            "type": "i64"
          },
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffleWin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "winWallet",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RaffleEnded",
      "msg": "Rent Has Ended"
    },
    {
      "code": 6001,
      "name": "InputError",
      "msg": "Input Error"
    },
    {
      "code": 6002,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    }
  ]
};

export const IDL: SolanaRaffles = {
  "version": "0.1.0",
  "name": "solana_raffles",
  "instructions": [
    {
      "name": "createRaffle",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "winNftUrl",
          "type": "string"
        },
        {
          "name": "winners",
          "type": "u8"
        },
        {
          "name": "nftEscrowedBump",
          "type": "u8"
        },
        {
          "name": "tokenEscrowedBump",
          "type": "u8"
        },
        {
          "name": "endDate",
          "type": "i64"
        },
        {
          "name": "createdDate",
          "type": "i64"
        },
        {
          "name": "price",
          "type": "u8"
        },
        {
          "name": "ifRentNft",
          "type": "u8"
        },
        {
          "name": "rentNft",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "purchaseTicket",
      "accounts": [
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "participantAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "endRaffle",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closeTicketAccount",
      "accounts": [
        {
          "name": "participant",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "ticket",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRaffleWin",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winWallet",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleWin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "winWalletAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRentNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNft",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nftName",
          "type": "string"
        },
        {
          "name": "nftImage",
          "type": "string"
        },
        {
          "name": "rentNftEscrowedAtaBump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "closeRentNft",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNft",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sendRaffleToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platform",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "platformAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "sendRaffleRentNftToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "raffle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "raffleAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenEscrowed",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rentNftAuthorityAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createRentNftCount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftCount",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "createdDate",
          "type": "i64"
        },
        {
          "name": "rentNft",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "updateRentNftCount",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "rentNftCount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "raffle",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "winNftUrl",
            "type": "string"
          },
          {
            "name": "winNftPubkey",
            "type": "publicKey"
          },
          {
            "name": "winners",
            "type": "u8"
          },
          {
            "name": "token",
            "type": "publicKey"
          },
          {
            "name": "nftEscrowedBump",
            "type": "u8"
          },
          {
            "name": "nftEscrowed",
            "type": "publicKey"
          },
          {
            "name": "tokenEscrowed",
            "type": "publicKey"
          },
          {
            "name": "authorityAta",
            "type": "publicKey"
          },
          {
            "name": "endDate",
            "type": "i64"
          },
          {
            "name": "createdDate",
            "type": "i64"
          },
          {
            "name": "price",
            "type": "u8"
          },
          {
            "name": "tokenEscrowedBump",
            "type": "u8"
          },
          {
            "name": "ifRentNft",
            "type": "u8"
          },
          {
            "name": "rentNft",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "ticket",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "participant",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "rentNft",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftName",
            "type": "string"
          },
          {
            "name": "nftImage",
            "type": "string"
          },
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "authorityAta",
            "type": "publicKey"
          },
          {
            "name": "rentNftEscrowedAta",
            "type": "publicKey"
          },
          {
            "name": "rentNftEscrowedAtaBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "rentNftCount",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "rentNft",
            "type": "publicKey"
          },
          {
            "name": "createdDate",
            "type": "i64"
          },
          {
            "name": "count",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "raffleWin",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "raffle",
            "type": "publicKey"
          },
          {
            "name": "winWallet",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "RaffleEnded",
      "msg": "Rent Has Ended"
    },
    {
      "code": 6001,
      "name": "InputError",
      "msg": "Input Error"
    },
    {
      "code": 6002,
      "name": "Unauthorized",
      "msg": "Unauthorized"
    }
  ]
};