import React, { useState, useEffect, } from 'react';
import { Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export default VersionApps = (props) => {
    const [ version, setVersion ] = useState("2.7.0");
    useEffect(() => {
        DeviceInfo.getVersion().then(versionapps => setVersion(versionapps))
    }, [])
    return <Text {...props}>{version}</Text>
};
