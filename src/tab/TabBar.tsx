import * as React from 'react';
import Tab from './Tab';
import './tab.fx.css';

type TabBarProps = {
    titles: string[];
    switchCallback?: any;
};

type TabBarState = {
    titles: string[];
    clickedTab: number;
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
                {this.props.titles.map((title: string, i: number) => {
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
