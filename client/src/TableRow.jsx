import React from 'react';

const style = {
  cursor: 'pointer',
}

export default class TableRow extends React.Component {
  render() {
    return (
		<tr>
			<td>3/29/18</td>
			<td>Bench Press</td>
			<td>1</td>
			<td>10</td>
			<td>155</td>
		</tr>
    );
  }
}