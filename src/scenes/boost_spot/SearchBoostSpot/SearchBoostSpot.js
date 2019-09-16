import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

export default SearchBoostSpot = (props) => {
    return (
        <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 16, padding: 10, borderWidth: 1, borderColor: "#E1DFE1" }}>
            <Text style={{ color: "#747274" }}>Cari Boost Spots</Text>
            <Octicons name="search" size={20} color="#747274" />
        </TouchableOpacity>
    );
};
