import * as React from 'react';
import Tab from './Tab';
import './tab.fx.css';

// FIXME hmueller: find correct types
type TabBarProps = {
    titles?: any;
    switchCallback?: any;
};

// FIXME hmueller: find correct types
type TabBarState = {
    titles?: any;
    clickedTab?: any;
};

export default class TabBar extends React.Component<TabBarProps, TabBarState> {
    constructor(props: TabBarProps) {
        super(props);
        this.state = {
            titles: [],
            clickedTab: -1
        };
    }

    render() {
        return (
            <div className={'tabBar'}>
                {this.props.titles.map((title: any, i: number) => {
                    // FIXME hmueller: find correct type for 'title'
                    return (
                        <span
                            onClick={() => {
                                this.wasClicked(i);
                                this.props.switchCallback(title.toUpperCase());
                            }}
                            key={i}
                        >
                            <Tab
                                title={title.toUpperCase()}
                                key={i}
                                active={i === this.state.clickedTab}
                            />
                        </span>
                    );
                })}
            </div>
        );
    }

    wasClicked = (index: number) => {
        this.setState({
            clickedTab: index
        });
    };
}
