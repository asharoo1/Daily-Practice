// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.0 < 0.9.0;

interface InterfaceExample{
    
	function getStr() public view returns(string memory);
	function setValue(uint _num1, uint _num2) public;
	function add() public view returns(uint);
	
}

contract thisContract is InterfaceExample{

	uint private num1;
	uint private num2;

	function getStr() public view returns(string memory){
		return "Cheking Stringg";
	}
	
	function setValue(uint _num1, uint _num2) public{
		num1 = _num1;
		num2 = _num2;
	}
	
	function add() public view returns(uint){
		return num1 + num2;
	}
	
}

contract call{
	
	InterfaceExample obj;

	function call() public{
	    obj = new thisContract();
	}
	
	function getValue() public returns(uint){
		obj.setValue(4, 16);
		return obj.add();
	}
}
