// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;


library MyLiabrary{
    
    struct Player{
        uint score;
    }
    
    function incrementScore(Player storage _player, uint points) public returns(uint){
        
        _player.score += points;
    }
}

contract Test{
    
    mapping (uint => MyLiabrary.Player) public players;
    
    function fun(uint _playerNum, uint score) public {
        
        MyLiabrary.incrementScore(players[_playerNum], score);
        
    }
}

// contract Test{
    
//     using MyLiabrary for MyLiabrary.Player;
    
//     mapping (uint => MyLiabrary.Player) public players;
    
//     function fun(uint _playerNum, uint score) public {
        
//         players[_playerNum].incrementScore(score);
        
//     }
// }