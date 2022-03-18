import React, { useState, useEffect } from 'react'
import { Contract, ethers, Signer } from 'ethers'
import greg from '../static/greg.png'
import Image from 'next/image'

const MintScreen:React.FC<{signer: Signer | undefined}> = ({ signer }) => {
  const approvedTestnetIds = [80001,43113,4] //Polygon Mumbai, Avalanche Fuji and Rinkeby network ids
  //Omnichain Greg addresses, abi and metadata
  const gregAddressList = [
    {
      id: 4,
      address: '0x6B17b70Dc87acd03b22fD986700a0e6389f9add2'
    },
    {
      id: 43113,
      address: '0x8Eb93df5720b8437393F8DdeA50B5D5a1817f202'
    },
    {
      id: 80001,
      address: ''
    }
  ]
  const gregURI = 'https://gateway.pinata.cloud/ipfs/QmTZ3MqmjhSXPjC25Q7LGuB31DzXmPaYcoL9EdepShnooM/1.json'
  const gregAbi = [
    {
      'inputs': [
        {
          'internalType': 'string',
          'name': 'name_',
          'type': 'string'
        },
        {
          'internalType': 'string',
          'name': 'symbol_',
          'type': 'string'
        },
        {
          'internalType': 'address',
          'name': '_layerZeroEndpoint',
          'type': 'address'
        }
      ],
      'stateMutability': 'nonpayable',
      'type': 'constructor'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'approved',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'Approval',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        },
        {
          'indexed': false,
          'internalType': 'bool',
          'name': 'approved',
          'type': 'bool'
        }
      ],
      'name': 'ApprovalForAll',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'previousAdminRole',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'newAdminRole',
          'type': 'bytes32'
        }
      ],
      'name': 'RoleAdminChanged',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        }
      ],
      'name': 'RoleGranted',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'sender',
          'type': 'address'
        }
      ],
      'name': 'RoleRevoked',
      'type': 'event'
    },
    {
      'anonymous': false,
      'inputs': [
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'indexed': true,
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'Transfer',
      'type': 'event'
    },
    {
      'inputs': [],
      'name': 'DEFAULT_ADMIN_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'MINTER_ROLE',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'approve',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        }
      ],
      'name': 'balanceOf',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'endpoint',
      'outputs': [
        {
          'internalType': 'contract ILayerZeroEndpoint',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'getApproved',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        }
      ],
      'name': 'getRoleAdmin',
      'outputs': [
        {
          'internalType': 'bytes32',
          'name': '',
          'type': 'bytes32'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'grantRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'hasRole',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        }
      ],
      'name': 'isApprovedForAll',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint16',
          'name': '_srcChainId',
          'type': 'uint16'
        },
        {
          'internalType': 'bytes',
          'name': '_fromAddress',
          'type': 'bytes'
        },
        {
          'internalType': 'uint64',
          'name': '_nonce',
          'type': 'uint64'
        },
        {
          'internalType': 'bytes',
          'name': '_payload',
          'type': 'bytes'
        }
      ],
      'name': 'lzReceive',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'name',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'ownerOf',
      'outputs': [
        {
          'internalType': 'address',
          'name': '',
          'type': 'address'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'renounceRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes32',
          'name': 'role',
          'type': 'bytes32'
        },
        {
          'internalType': 'address',
          'name': 'account',
          'type': 'address'
        }
      ],
      'name': 'revokeRole',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'string',
          'name': 'uri',
          'type': 'string'
        }
      ],
      'name': 'safeMint',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'safeTransferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        },
        {
          'internalType': 'bytes',
          'name': '_data',
          'type': 'bytes'
        }
      ],
      'name': 'safeTransferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint16',
          'name': '_chainId',
          'type': 'uint16'
        },
        {
          'internalType': 'bytes',
          'name': '_dstOmnichainNFTAddr',
          'type': 'bytes'
        },
        {
          'internalType': 'uint256',
          'name': '_id',
          'type': 'uint256'
        }
      ],
      'name': 'sendNFT',
      'outputs': [],
      'stateMutability': 'payable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'operator',
          'type': 'address'
        },
        {
          'internalType': 'bool',
          'name': 'approved',
          'type': 'bool'
        }
      ],
      'name': 'setApprovalForAll',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'bytes4',
          'name': 'interfaceId',
          'type': 'bytes4'
        }
      ],
      'name': 'supportsInterface',
      'outputs': [
        {
          'internalType': 'bool',
          'name': '',
          'type': 'bool'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'symbol',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        }
      ],
      'name': 'tokenByIndex',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'owner',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'index',
          'type': 'uint256'
        }
      ],
      'name': 'tokenOfOwnerByIndex',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'tokenURI',
      'outputs': [
        {
          'internalType': 'string',
          'name': '',
          'type': 'string'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [],
      'name': 'totalSupply',
      'outputs': [
        {
          'internalType': 'uint256',
          'name': '',
          'type': 'uint256'
        }
      ],
      'stateMutability': 'view',
      'type': 'function'
    },
    {
      'inputs': [
        {
          'internalType': 'address',
          'name': 'from',
          'type': 'address'
        },
        {
          'internalType': 'address',
          'name': 'to',
          'type': 'address'
        },
        {
          'internalType': 'uint256',
          'name': 'tokenId',
          'type': 'uint256'
        }
      ],
      'name': 'transferFrom',
      'outputs': [],
      'stateMutability': 'nonpayable',
      'type': 'function'
    }
  ]

  //State variables
  const [connectedChainId, setConnectedChainId] = useState<number>(0)
  const [currentContract, setCurrentContract] = useState<Contract>()
  const [currentBalance, setCurrentBalance] = useState<number>(0)
  const [currentIds, setCurrentIds] = useState<number[]>([])

  //Hook that records the connected chain id and NFT contract on component render
  useEffect(() => {
    const getChainIdAndContract = async () => {
      if (signer) {
        const chainId = await signer.getChainId()
        setConnectedChainId(chainId)
        if (approvedTestnetIds.includes(chainId)) {
          //@ts-expect-error if the aprrovedTestnetIds includes the chainId, then the address is guaranteed to be a string
          const { address } = gregAddressList.find(a => a.id === chainId)
          const gregContract = new ethers.Contract(address,gregAbi,signer)
          setCurrentContract(gregContract)
        }
      }
    }
    getChainIdAndContract()
  },[signer])

  //hook that updates total balance and ids of the owned NFTs
  useEffect(() => {
    const getBalanceAndIds = async () => {
      if (currentContract !== undefined) {
        const balance = await currentContract.balanceOf(signer?.getAddress())
        console.log(`Signer owns ${balance} tokens`)
        setCurrentBalance(Number(balance))
        const ids:number[] = []
        for (let i = 0; i< balance; i++) {
          const tokenId = await currentContract.tokenOfOwnerByIndex(signer?.getAddress(),i)
          ids.push(Number(tokenId))
          console.log(`Signer owns ${tokenId} tokenId`)
        }
        setCurrentIds(ids)
      }
    }
    getBalanceAndIds()
  },[currentContract])

  //function for minting a single greg
  const mintGreg = async () => {
    //@ts-expect-error this function is not accesible if the currentContract is undefined
    const result = await currentContract.safeMint(signer?.getAddress(),gregURI)
    console.log(result)
  }

  if (!signer) {
    return(
      <>
        <h2 className='text-white'>Please connect your metamask first!</h2>
      </>
    )
  } else if (approvedTestnetIds.includes(connectedChainId) === false) {
    return(
      <>
        <h2 className='text-white'>Please connect to Rinkeby, Fuji or Mumbai testnet!</h2>
      </>)
  }
  return(
    <>
      <h2 className='text-white'>You are connected to a proper network and ready to mint an omnichain Greg!</h2>
      <div className='w-72 my-3'>
        <Image src={greg} />
      </div>
      <div className='button-borders'>
        <button className='primary-button' onClick={() => mintGreg()}>Mint</button>
      </div>
      <span className='my-3'>Your Greg balance is: {currentBalance}</span>
      <div className='flex flex-col '>
        {currentIds.map(id => {
          return <span>Greg #{id}</span>
        })}
      </div>
    </>
  )
}

export default MintScreen