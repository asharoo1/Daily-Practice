// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 <0.9.0;


library MyLiabrary{
    
    function add10(uint _num) public pure returns(uint){
        
        return _num + 10;
    }
}

contract Test{
    
    function fun(uint num) public pure returns(uint){
        
        uint res = MyLiabrary.add10(num);
        
        return res;
    }
}