// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.8 <0.9;

contract StringToBytes32{
    function getBytes32fromString(string memory str) public pure returns(bytes32 result){
        
        bytes memory tempEmpStr = bytes(str);
        
        if(tempEmpStr.length == 0){
            return 0x00;
        }
        
        assembly {
            result := mload(add(str, 32))
        }
    }
}
// [ "0x424a500000000000000000000000000000000000000000000000000000000000", "0x436f6e6772657373000000000000000000000000000000000000000000000000" ]

contract Ballot{
    
    struct Voter{
        uint weight;
        bool voted;
        address delegate;
        uint vote;
    }
    
    struct Candidate {
        bytes32 name;
        uint voteCount;
    }
    
    address public owner;
    
    mapping (address => Voter) voters;
    
    Candidate[] public candidates;
    
    constructor(bytes32[] memory candidateNames) {
        
        owner = msg.sender;
        
        voters[owner].weight = 1;
        
        // put candidates names entered in the totalcandidate Array
        
        for(uint i = 0; i < candidateNames.length; i++){
            candidates.push(Candidate({
                name: candidateNames[i],
                voteCount: 0
            }));
        }
    }
    
    // Give Right to voteCount
    function giveRightToVote(address voter) public {
        require(msg.sender == owner, "Owner has the right to grantright to vote access");
        require(!voters[voter].voted, "Voter has already Voted");
        require(voters[voter].weight == 0);
        
        voters[voter].weight = 1;
    }
    
    function vote(uint candidate) public {
        
        require(voters[msg.sender].weight != 0, "Voter has no right to Vote");
        require(!voters[msg.sender].voted, "Voter has already voted");
        
        voters[msg.sender].voted = true;
        voters[msg.sender].vote = candidate;
        
        candidates[candidate].voteCount += voters[msg.sender].weight;
    }
    
    function winningCandidate() public view returns(uint _winningCandidate){
        require(msg.sender == owner, "Only owner can declare winner");
        uint winningVoteCount = 0;
        
        for(uint i = 0; i < candidates.length; i++){
            
            if(candidates[i].voteCount > winningVoteCount){
                winningVoteCount = candidates[i].voteCount;
                _winningCandidate = i;
            }
        }
    }
    
    
    function winnerName() public view returns(bytes32 _winnerName){
        require(msg.sender == owner, "Only owner can declare winner");
        _winnerName = candidates[winningCandidate()].name;
    }
    
    
}