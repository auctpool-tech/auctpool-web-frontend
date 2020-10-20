import Auction from './Auction'

export interface Nft {
    uuid: string
    nftMedia: string //ipfs 
    owner: string
    creator: string
    properties?: Map<string, string>
    
    auction?: Auction
}
