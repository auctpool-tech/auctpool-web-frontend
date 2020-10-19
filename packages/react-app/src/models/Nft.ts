import Auction from './Auction'

interface Nft {
    uuid: string
    nftMedia: string //ipfs 
    owner: string
    creator: string
    properties?: map<string, string>
    
    auction?: Auction
}

export default Nft