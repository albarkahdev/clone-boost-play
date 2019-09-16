import React, { useState, useEffect } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

export default ScrollViewWithRefresh = ({ children }) => {
    const [refreshing, setRefreshing] = useState(false);
    const self = this;
    useEffect(() => {
        return () => { if (self.timeoutrefresh) clearTimeout(self.timeoutrefresh); }
    }, [])
    const _onRefresh = () => {
        setRefreshing(true)
        self.timeoutrefresh = setTimeout(() => {
            setRefreshing(false)
        }, 1000);
    }
    return (
        <ScrollView
            style={{ flex: 1 }}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={_onRefresh}
                />
            }
        >
            {children}
        </ScrollView>
    );
};
