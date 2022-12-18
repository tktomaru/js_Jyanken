import React, {Component} from 'react';
import propTypes from 'prop-types'

const JyankenBox = (props) =>
	{
	return (
		<div>
			<button  class="siimple-btn" onClick={()=> props.actionPon(0)}>グー</button>
			<button  class="siimple-btn" onClick={()=> props.actionPon(1)}>チョキ</button>
			<button  class="siimple-btn" onClick={()=> props.actionPon(2)}>パー</button>
		</div>
	)
};

JyankenBox.propTypes = {
	actionPon: propTypes.func
}
export default JyankenBox;
