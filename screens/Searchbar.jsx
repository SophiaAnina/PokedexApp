import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import usePokemonAPI from './usePokemonApi';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { data, loading, error } = usePokemonAPI(searchTerm);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Pokémon"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {loading && searchTerm && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>{data.name}</h2>
                    <img src={data.sprites.front_default} alt={data.name} />
                    <p>Height: {data.height}</p>
                    <p>Weight: {data.weight}</p>
                </div>
            )}
        </div>
    );
};

export default Searchbar;