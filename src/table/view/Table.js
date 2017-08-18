import React,{Component} from 'react';
import PubCardArea from './PubCardArea';
import ChipArea from './ChipArea';

class Table extends Component{
    render(){
        return (
            <div className="card-table">
                <PubCardArea/>
                <ChipArea/>
            </div>
        )
    }
}

export default Table;