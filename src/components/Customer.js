import React from 'react';

//리엑트 요소는 JSX라는것으로 생성할수 있다.
//JSX 특징 내부데이터가 2개이상일때 div같은것으로 감싸서 사용을 해야함 문법중 하나
//출력할 내용이 많으면 적절히 분해해서 구조화 시킬 필요가 있다.
class Customer extends React.Component{
    render(){
        return(
        <div>
            <CustomerProfile
            id={this.props.id}
            image={this.props.image}
            name={this.props.name}
            />
            <CustomerInfo
            gender={this.props.gender}
            job={this.props.job}
            />
           </div>
        );
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}({this.props.id})</h2>

            </div>
        );
    }
}

class CustomerInfo extends React.Component{
    render() {
        return(
            <div>
                <p></p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

export default Customer;