import React, { useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import LaptopDetail from './LaptopDetail';
import { LaptopContext } from '../laptopContext';

const LaptopList = () => {
    const { cars, loading } = useContext(LaptopContext);

    if (loading) {
        return (
            <View>
                <Text>Loading..</Text>
            </View>
        );
    }

    return (
        <ScrollView>
            <View>
                {cars.map((carBrand, index) => (
                    <View key={index}>
                        <LaptopDetail {...carBrand} />
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default LaptopList;
