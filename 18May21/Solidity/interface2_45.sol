// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.6.2 <0.9.0;

interface Result{
    function getResult() external returns(uint);
}

contract Test is Result{

    uint ans;
    function setValue(uint a, uint b) public {
        ans = a + b;
    }
    function getResult() public override view returns(uint){
        return ans;
    }
}