//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract JeembosFrenzy is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    string collectionURI = '';
    uint256 supplyLimit;

    constructor(string memory tokenName, string memory symbol, string memory _contractURI, uint256 _supplyLimit) ERC721(tokenName, symbol) {
        collectionURI = _contractURI;
        supplyLimit = _supplyLimit;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://gateway.pinata.cloud/ipfs/";
    }

    function contractURI() external view returns (string memory) {
        return string(abi.encodePacked(_baseURI(), collectionURI));
    }

    function getBaseURI() external pure returns (string memory) {
        return _baseURI();
    }

    function getSupplyLimit() external view returns (uint256) {
        return supplyLimit;
    }

    function mintToken(address player, string memory tokenURI)
    external
    returns (uint256)
    {
        require(_tokenIds.current() < supplyLimit,'the total supply limit has been reached');
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);
        return newItemId;
    }
}