import React from 'react';
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

//리엑트 요소는 JSX라는것으로 생성할수 있다.
//JSX 특징 내부데이터가 2개이상일때 div같은것으로 감싸서 사용을 해야함 문법중 하나
//출력할 내용이 많으면 적절히 분해해서 구조화 시킬 필요가 있다.
class Customer extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}
export default Customer;