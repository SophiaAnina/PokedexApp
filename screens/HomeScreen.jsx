import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, Platform, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonPicker from './PokemonPicker';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View  style={styles.scrollHolder}>
      <ScrollView horizontal style={styles.column}
       snapToInterval={350}
       decelerationRate={0} 
       bounces={false} >
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0002 Ivysaur.png')} style={styles.OverlayImage} /> 
	 <Text style={styles.DexNumber}>
		#0002 
	 </Text>
	 <Text style={styles.title}>
		Ivysaur
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0003 Venusaur.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0003
	 </Text>
	 <Text style={styles.title}>
		Vensaur
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0004 Charmander.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0004 
	 </Text>
	 <Text style={styles.title}>
		Charmander
	 </Text>
	 <View style={styles.ButtonContainer}>
		
		<View style={styles.Fire}>
		<Text style={styles.FireText}>Fire</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0005 Charmeleon.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0005 
	 </Text>
	 <Text style={styles.title}>
		Charmeleon
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fire}>
		<Text style={styles.FireText}>Fire</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0006 Charizard.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0006 
	 </Text>
	 <Text style={styles.title}>
		Charizard
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fire}>
		<Text style={styles.FireText}>Fire</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0007 Squirtle.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0007 
	 </Text>
	 <Text style={styles.title}>
		Squitle
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Water}>
		<Text style={styles.WaterText}>Water</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0008 Wartortle.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0008 
	 </Text>
	 <Text style={styles.title}>
		Wartortle
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Water}>
		<Text style={styles.WaterText}>Water</Text>
		</View>
	 </View>
</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0009 Blastoise.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0009 
	 </Text>
	 <Text style={styles.title}>
		Blastoise
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Water}>
		<Text style={styles.WaterText}>Water</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0010 Caterpie.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0010 
	 </Text>
	 <Text style={styles.title}>
		Caterpie
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0011 Metapod.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0011 
	 </Text>
	 <Text style={styles.title}>
		Metapod
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
	 </View> 
</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0012 Butterfree.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0012 
	 </Text>
	 <Text style={styles.title}>
		Butterfree
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyigText}>Flying</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0013 Weedle.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0013 
	 </Text>
	 <Text style={styles.title}>
		Weedle
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0014 Kakuna.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0014 
	 </Text>
	 <Text style={styles.title}>
		Kakuna
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>
</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0015 Beedrill.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0015
	 </Text>
	 <Text style={styles.title}>
		Beedrill
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0016 Pidgey.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0016 
	 </Text>
	 <Text style={styles.title}>
		Pidgey
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0017 Pidgeotto.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0017 
	 </Text>
	 <Text style={styles.title}>
		Pidgeotto
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0018 Pidgeot.png')} style={styles.OverlayImage} /><Text style={styles.DexNumber}>
		#0018 
	 </Text>
	 <Text style={styles.title}>
		Pidgeot
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View>

</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0019 Rattata.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0002 
	 </Text>
	 <Text style={styles.title}>
		Ivysaur
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0020 Raticate.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0020 
	 </Text>
	 <Text style={styles.title}>
		Raticate
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0021 Spearow.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0021
	 </Text>
	 <Text style={styles.title}>
		Spearow
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
		<View style={styles.Flying }>
		<Text style={styles.FlyinglText}>Flying</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0022 Fearow.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0022 
	 </Text>
	 <Text style={styles.title}>
		Fearow
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0023 Ekans.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0023 
	 </Text>
	 <Text style={styles.title}>
		Ekans
	 </Text>
	 <View style={styles.ButtonContainer}>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0024 Arbok.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0024
	 </Text>
	 <Text style={styles.title}>
		Arbok
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0025 Pikachu.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0025 
	 </Text>
	 <Text style={styles.title}>
		Pikachu
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Electric}>
		<Text style={styles.ElectricText}>Electric</Text>
		</View>
	 </View> 
</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0026 Raichu.png')} style={styles.OverlayImage} /><Text style={styles.DexNumber}>
		#0026 
	 </Text>
	 <Text style={styles.title}>
		Raichu
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Electric}>
		<Text style={styles.ElectricText}>Electric</Text>
		</View>
		
	 </View>

</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0027 Sandshrew.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0027 
	 </Text>
	 <Text style={styles.title}>
		Sandshrew
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Ground}>
		<Text style={styles.GroundText}>Ground</Text>
		</View>
		
	 </View> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0028 Sandslash.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0028 
	 </Text>
	 <Text style={styles.title}>
		Sandslash
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Ground}>
		<Text style={styles.GroundText}>Ground</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0029 Nidoran.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0029 
	 </Text>
	 <Text style={styles.title}>
		Nidoran
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 

</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0030 Nidorina.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0030 
	 </Text>
	 <Text style={styles.title}>
		Nidorina
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0031 Nidoqueen.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0031 
	 </Text>
	 <Text style={styles.title}>
	Nidoqueen
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0032 Nidoran.png')} style={styles.OverlayImage} /><Text style={styles.DexNumber}>
		#0032 
	 </Text>
	 <Text style={styles.title}>
		Nidoran
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>

</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0033 Nidorino.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0033 
	 </Text>
	 <Text style={styles.title}>
		Nidorino
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0034 Nidoking.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0034 
	 </Text>
	 <Text style={styles.title}>
		Nidoking
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Ground}>
		<Text style={styles.GroundText}>Ground</Text>
		</View>
		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0035 Clefairy.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0035 
	 </Text>
	 <Text style={styles.title}>
		Clefairy
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View>

</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0036 Clefable.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0036 
	 </Text>
	 <Text style={styles.title}>
		Clefable
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0037 Vulpix.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0035 
	 </Text>
	 <Text style={styles.title}>
		Vulpix
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fire}>
		<Text style={styles.FireText}>Fire</Text>
		</View>
	 </View> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0038 Ninetales.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0038 
	 </Text>
	 <Text style={styles.title}>
		Ninetales
	 </Text>
	 <View style={styles.ButtonContainer}>
		<View style={styles.Fire}>
		<Text style={styles.FireText}>Fire</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0039 Jigglypuff.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0039 
	 </Text>
	 <Text style={styles.title}>
		Jigglypuff
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>

		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0040 Wigglytuff.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0040 
	 </Text>
	 <Text style={styles.title}>
		Wigglypuff
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>

		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0041 Zubat.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0041 
	 </Text>
	 <Text style={styles.title}>
		Zubat
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0042 Golbat.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0042 
	 </Text>
	 <Text style={styles.title}>
		Golbat
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>

		<View style={styles.Flying}>
		<Text style={styles.FlyingText}>Flying</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0043 Oddish.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0043 
	 </Text>
	 <Text style={styles.title}>
		Oddish
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0044 Gloom.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0044 
	 </Text>
	 <Text style={styles.title}>
		Gloom
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0045 Vileplume.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0045 
	 </Text>
	 <Text style={styles.title}>
		Vileplume
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0046 Paras.png')} style={styles.OverlayImage} /> 
	  <Text style={styles.DexNumber}>
		#0046 
	 </Text>
	 <Text style={styles.title}>
		Paras
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>

		<View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>
	 </View> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0047 Parasect.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0047 
	 </Text>
	 <Text style={styles.title}>
		Parasect
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>

		<View style={styles.Grass}>
		<Text style={styles.GrassText}>Grass</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0048 Venonat.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0048 
	 </Text>
	 <Text style={styles.title}>
		Venonat
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Bug}>
		<Text style={styles.BugText}>Bug</Text>
		</View>

		<View style={styles.Poison}>
		<Text style={styles.PoisonText}>Poison</Text>
		</View>
	 </View>  
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0049 Venomoth.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0039 
	 </Text>
	 <Text style={styles.title}>
		Jigglypuff
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>

		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View>  
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0050 Diglett.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0050 
	 </Text>
	 <Text style={styles.title}>
		Diglett
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Ground}>
		<Text style={styles.GroundText}>Ground</Text>
		</View>
	 </View>  
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0051 Dugtrio.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0041 
	 </Text>
	 <Text style={styles.title}>
		Dugtrio
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Ground}>
		<Text style={styles.GroundText}>Ground</Text>
		</View>
	 </View>   
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0052 Meowth.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0052 
	 </Text>
	 <Text style={styles.title}>
		Meoth
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>
	 </View>   
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0053 Persian.png')} style={styles.OverlayImage} />
	  <Text style={styles.DexNumber}>
		#0039 
	 </Text>
	 <Text style={styles.title}>
		Jigglypuff
	 </Text>
	 <View style={styles.ButtonContainer}>
	 <View style={styles.Normal}>
		<Text style={styles.NormalText}>Normal</Text>
		</View>

		<View style={styles.Fairy}>
		<Text style={styles.FairyText}>Fairy</Text>
		</View>
	 </View>   
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0054 Psyduck.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0055 Golduck.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0056 Mankey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0057 Primeape.png')} style={styles.OverlayImage} /> 
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0058 Growlithe.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0059 Arcanine.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0060 Poliwag.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0061 Poliwhirl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0062 Poliwrath.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0063 Abra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0064 Kadabra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0065 Alakazam Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0066 Machop.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0067 Machoke.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0068 Machamp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0069 Bellsprout.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0070 Weepinbell.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0071 Victreebel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0072 Tentacool.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0073 Tentacruel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0074 Geodude.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0075 Graveler.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0076 Golem.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0077 Ponyta.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0078 Rapidash.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0079 Slowpoke.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0080 Slowbro.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0081 Magnemite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0082 Magneton.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0083 Farfetch.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0084 Doduo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0085 Dodrio.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0086 Seel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0087 Dewgong.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0088 Grimer.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0089 Muk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0090 Shellder.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0091 Cloyster.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0092 Gastly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0093 Haunter.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0094 Gengar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0095 Onix.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0096 Drowzee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0097 Hypno.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0098 Krabby.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0099 Kingler.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0100 Voltorb.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0101 Electrode.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0102 Exeggcute.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0103 Exeggutor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0104 Cubone.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0105 Marowak Alola.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0105 Marowak.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0106 Hitmonlee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0107 Hitmonchan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0108 Lickitung.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0109 Koffing.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0110 Weezing.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0111 Rhyhorn.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0112 Rhydon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0113 Chansey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0114 Tangela.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0115 Kangaskhan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0116 Horsea.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0117 Seadra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0118 Goldeen.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0119 Seaking.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0120 Staryu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0121 Starmie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0122 Mr. Mime .png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0123 Scyther.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0124 Jynx.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0125 Electabuzz.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0126 Magmar.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0127 Pinsir.png')} style={styles.OverlayImage} /> 
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0128 Tauros Paldea Combat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0128 Tauros.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0129 Magikarp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0130 Gyarados.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0131 Lapras.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0132 Ditto.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0133 Eevee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0134 Vaporeon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0135 Jolteon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0136 Flareon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0137 Porygon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0138 Omanyte.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0139 Omastar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0140 Kabuto.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0141 Kabutops.png')} style={styles.OverlayImage} /> 
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0142 Aerodactyl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0143 Snorlax.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0144 Articuno.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0145 Zapdos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0146 Moltres.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0147 Dratini.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0148 Dragonair.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0149 Dragonite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0150 Mewtwo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0151 Mew.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0152 Chikorita.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0153 Bayleef.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0154 Meganium.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0155 Cyndaquil.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0156 Quilava.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0157 Typhlosion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0158 Totodile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0159 Croconaw.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0160 Feraligatr.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0161 Sentret.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0162 Furret.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0163 Hoothoot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0164 Noctowl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0165 Ledyba.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0166 Ledian.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0167 Spinarak.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0168 Ariados.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0169 Crobat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0170 Chinchou.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0171 Lanturn.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0172 Pichu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0173 Cleffa.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0174 Igglybuff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0175 Togepi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0176 Togetic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0177 Natu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0178 Xatu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0179 Mareep.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0180 Flaaffy.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0181 Ampharos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0182 Bellossom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0183 Marill.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0184 Azumarill.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0185 Sudowoodo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0186 Politoed.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0187 Hoppip.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0188 Skiploom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0189 Jumpluff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0190 Aipom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0191 Sunkern.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0192 Sunflora.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0193 Yanma.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0194 Wooper.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0195 Quagsire.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0196 Espeon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0197 Umbreon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0198 Murkrow.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0199 Slowking.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0200 Misdreavus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0201 Unown.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0202 Wobbuffet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0203 Girafarig.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0204 Pineco.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0205 Forretress.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0206 Dunsparce.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0207 Gligar.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0208 Steelix.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0209 Snubbull.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0210 Granbull.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0211 Qwilfish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0212 Scizor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0213 Shuckle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0214 Heracross.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0215 Sneasel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0216 Teddiursa.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0217 Ursaring.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0218 Slugma.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0219 Magcargo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0220 Swinub.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0221 Piloswine.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0222 Corsola.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0223 Remoraid.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0224 Octillery.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0225 Delibird.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0226 Mantine.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0227 Skarmory.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0228 Houndour.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0229 Houndoom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0230 Kingdra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0231 Phanpy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0232 Donphan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0233 Porygon2.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0234 Stantler.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0235 Smeargle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0236 Tyrogue.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0237 Hitmontop.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0238 Smoochum.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0239 Elekid.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0240 Magby.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0241 Miltank.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0242 Blissey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0243 Raikou.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0244 Entei.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0245 Suicune.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0246 Larvitar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0247 Pupitar.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0248 Tyranitar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0249 Lugia.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0250 Ho-Oh.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0251 Celebi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0252 Treecko.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0253 Grovyle.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0254 Sceptile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0255 Torchic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0256 Combusken.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0257 Blaziken.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0258 Mudkip.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0259 Marshtomp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0260 Swampert.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0261 Poochyena.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0262 Mightyena.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0263 Zigzagoon.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0264 Linoone.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0265 Wurmple.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0266 Silcoon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0267 Beautifly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0268 Cascoon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0269 Dustox.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0270 Lotad.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0271 Lombre.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0272 Ludicolo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0273 Seedot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0274 Nuzleaf.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0275 Shiftry.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0276 Taillow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0277 Swellow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0278 Wingull.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0279 Pelipper.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0280 Ralts.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0281 Kirlia.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0282 Gardevoir.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0283 Surskit.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0284 Masquerain.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0285 Shroomish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0286 Breloom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0287 Slakoth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0288 Vigoroth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0289 Slaking.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0290 Nincada.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0291 Ninjask.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0292 Shedinja.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0293 Whismur.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0294 Loudred.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0295 Exploud.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0296 Makuhita.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0297 Hariyama.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0298 Azurill.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0299 Nosepass.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0300 Skitty.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0301 Delcatty.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0302 Sableye.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0303 Mawile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0304 Aron.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0305 Lairon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0306 Aggron Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0306 Aggron.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0307 Meditite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0308 Medicham Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0308 Medicham.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0309 Electrike.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0310 Manectric.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0311 Plusle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0312 Minun.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0313 Volbeat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0314 Illumise.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0315 Roselia.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0316 Gulpin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0317 Swalot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0318 Carvanha.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0319 Sharpedo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0320 Wailmer.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0321 Wailord.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0322 Numel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0323 Camerupt Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0323 Camerupt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0324 Torkoal.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0325 Spoink.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0326 Grumpig.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0327 Spinda.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0328 Trapinch.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0329 Vibrava.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0330 Flygon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0331 Cacnea.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0332 Cacturne.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0333 Swablu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0334 Altaria Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0334 Altaria.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0335 Zangoose.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0336 Seviper.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0337 Lunatone.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0338 Solrock.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0339 Barboach.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0340 Whiscash.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0341 Corphish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0342 Crawdaunt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0343 Baltoy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0344 Claydol.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0345 Lileep.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0346 Cradily.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0347 Anorith.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0348 Armaldo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0349 Feebas.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0350 Milotic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0351 Castform.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0352 Kecleon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0353 Shuppet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0354 Banette Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0354 Banette.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0355 Duskull.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0356 Dusclops.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0357 Tropius.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0358 Chimecho.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0359 Absol.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0360 Wynaut.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0361 Snorunt.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0362 Glalie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0363 Spheal.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0364 Sealeo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0365 Walrein.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0366 Clamperl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0367 Huntail.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0368 Gorebyss.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0369 Relicanth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0370 Luvdisc.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0371 Bagon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0372 Shelgon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0373 Salamence Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0373 Salamence.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0374 Beldum.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0375 Metang.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0376 Metagross.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0377 Regirock.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0378 Regice.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0379 Registeel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0380 Latias Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0380 Latias.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0381 Latios.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0382 Kyogre.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0383 Groudon Primal.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0383 Groudon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0384 Rayquaza.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0385 Jirachi.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0386 Deoxys.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0387 Turtwig.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0388 Grotle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0389 Torterra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0390 Chimchar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0391 Monferno.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0392 Infernape.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0393 Piplup.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0394 Prinplup.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0395 Empoleon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0396 Starly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0397 Staravia.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0398 Staraptor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0399 Bidoof.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0400 Bibarel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0401 Kricketot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0402 Kricketune.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0403 Shinx.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0404 Luxio.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0405 Luxray.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0406 Budew.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0407 Roserade.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0408 Cranidos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0409 Rampardos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0410 Shieldon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0411 Bastiodon.png')} style={styles.OverlayImage} /> 
</View> 	
 

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0412 Burmy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0413 Wormadam Plant.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0413 Wormadam.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0414 Mothim.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0415 Combee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0416 Vespiquen.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0417 Pachirisu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0418 Buizel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0419 Floatzel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0420 Cherubi.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0421 Cherrim Sunny.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0422 Shellos.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0423 Gastrodon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0424 Ambipom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0425 Drifloon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0426 Drifblim.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0427 Buneary.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0428 Lopunny Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0428 Lopunny.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0429 Mismagius.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0430 Honchkrow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0431 Glameow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0432 Purugly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0433 Chingling.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0434 Stunky.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0435 Skuntank.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0436 Bronzor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0437 Bronzong.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0438 Bonsly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0439 Mime Jr.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0440 Happiny.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0441 Chatot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0442 Spiritomb.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0443 Gible.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0444 Gabite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0445 Garchomp Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0445 Garchomp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0446 Munchlax.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0447 Riolu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0448 Lucario Mega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0448 Lucario.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0449 Hippopotas.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0450 Hippowdon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0451 Skorupi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0452 Drapion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0453 Croagunk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0454 Toxicroak.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0455 Carnivine.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0456 Finneon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0457 Lumineon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0458 Mantyke.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0459 Snover.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0460 Abomasnow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0461 Weavile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0462 Magnezone.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0463 Lickilicky.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0464 Rhyperior.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0465 Tangrowth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0466 Electivire.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0467 Magmortar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0468 Togekiss.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0469 Yanmega.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0470 Leafeon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0471 Glaceon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0472 Gliscor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0473 Mamoswine.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0474 Porygon-Z.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0475 Gallade.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0476 Probopass.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0477 Dusknoir.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0478 Froslass.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0479 Rotom Wash.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0479 Rotom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0480 Uxie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0481 Mesprit.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0482 Azelf.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0483 Dialga Origin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0483 Dialga.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0484 Palkia Origin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0484 Palkia.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0485 Heatran.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0486 Regigigas.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0487 Giratina.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0488 Cresselia.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0489 Phione.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0490 Manaphy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0491 Darkrai.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0492 Shaymin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0493 Arceus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0494 Victini.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0495 Snivy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0496 Servine.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0497 Serperior.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0498 Tepig.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0499 Pignite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0500 Emboar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0501 Oshawott.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0502 Dewott.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0503 Samurott.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0504 Patrat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0505 Watchog.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0506 Lillipup.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0507 Herdier.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0508 Stoutland.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0509 Purrloin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0510 Liepard.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0511 Pansage.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0512 Simisage.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0513 Pansear.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0514 Simisear.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0515 Panpour.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0516 Simipour.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0517 Munna.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0518 Musharna.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0519 Pidove.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0520 Tranquill.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0521 Unfezant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0522 Blitzle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0523 Zebstrika.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0524 Roggenrola.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0525 Boldore.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0526 Gigalith.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0527 Woobat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0528 Swoobat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0529 Drilbur.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0530 Excadrill.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0531 Audino.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0532 Timburr.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0533 Gurdurr.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0534 Conkeldurr.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0535 Tympole.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0536 Palpitoad.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0537 Seismitoad.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0538 Throh.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0539 Sawk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0540 Sewaddle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0541 Swadloon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0542 Leavanny.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0543 Venipede.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0544 Whirlipede.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0545 Scolipede.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0546 Cottonee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0547 Whimsicott.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0548 Petilil.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0549 Lilligant.png')} style={styles.OverlayImage} /> 
</View> 	 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0550 Basculin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0551 Sandile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0552 Krokorok.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0553 Krookodile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0554 Darumaka.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0555 Darmanitan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0556 Maractus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0557 Dwebble.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0558 Crustle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0559 Scraggy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0560 Scrafty.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0561 Sigilyph.png')} style={styles.OverlayImage} /> 
</View> 	
 		
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0562 Yamask.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0563 Cofagrigus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0564 Tirtouga.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0565 Carracosta.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0566 Archen.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0567 Archeops.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0568 Trubbish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0569 Garbodor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0570 Zorua.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0571 Zoroark.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0572 Minccino.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0573 Cinccino.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0574 Gothita.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0575 Gothorita.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0576 Gothitelle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0577 Solosis.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0578 Duosion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0579 Reuniclus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0580 Ducklett.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0581 Swanna.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0582 Vanillite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0583 Vanillish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0584 Vanilluxe.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0585 Deerling Winter.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0586 Sawsbuck Winter.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0587 Emolga.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0588 Karrablast.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0589 Escavalier.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0590 Foongus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0591 Amoonguss.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0592 Frillish.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0593 Jellicent.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0594 Alomomola.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0595 Joltik.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0596 Galvantula.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0597 Ferroseed.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0598 Ferrothorn.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0599 Klink.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0600 Klang.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0601 Klinklang.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0602 Tynamo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0603 Eelektrik.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0604 Eelektross.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0605 Elgyem.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0606 Beheeyem.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0607 Litwick.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0608 Lampent.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0609 Chandelure.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0610 Axew.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0611 Fraxure.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0612 Haxorus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0613 Cubchoo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0614 Beartic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0615 Cryogonal.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0616 Shelmet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0617 Accelgor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0618 Stunfisk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0619 Mienfoo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0620 Mienshao.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0621 Druddigon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0622 Golett.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0623 Golurk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0624 Pawniard.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0625 Bisharp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0626 Bouffalant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0627 Rufflet.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0629 Vullaby.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0630 Mandibuzz.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0631 Heatmor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0632 Durant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0633 Deino.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0634 Zweilous.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0635 Hydreigon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0636 Larvesta.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0637 Volcarona.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0638 Cobalion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0639 Terrakion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0640 Virizion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0641 Tornadus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0642 Thundurus Therian.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0642 Thundurus.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0643 Reshiram.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0644 Zekrom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0645 Landorus.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0646 Kyurem.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0647 Keldeo.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0648 Meloetta.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0649 Genesect.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0650 Chespin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0651 Quilladin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0652 Chesnaught.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0653 Fennekin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0654 Braixen.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0655 Delphox.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0656 Froakie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0657 Frogadier.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0658 Greninja.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0659 Bunnelby.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0660 Diggersby.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0661 Fletchling.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0662 Fletchinder.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0663 Talonflame.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0664 Scatterbug.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0665 Spewpa.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0666 Vivillon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0667 Litleo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0668 Pyroar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0669 Flabébé.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0670 Floette.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0671 Florges.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0672 Skiddo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0673 Gogoat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0674 Pancham.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0675 Pangoro.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0676 Furfrou.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0677 Espurr.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0678 Meowstic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0679 Honedge.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0680 Doublade.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0681 Aegislash.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0682 Spritzee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0683 Aromatisse.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0684 Swirlix.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0685 Slurpuff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0686 Inkay.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0687 Malamar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0688 Binacle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0689 Barbaracle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0690 Skrelp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0691 Dragalge.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0692 Clauncher.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0693 Clawitzer.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0694 Helioptile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0695 Heliolisk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0696 Tyrunt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0697 Tyrantrum.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0698 Amaura.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0699 Aurorus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0700 Sylveon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0701 Hawlucha.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0702 Dedenne.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0703 Carbink.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0704 Goomy.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0705 Sliggoo.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0706 Goodra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0707 Klefki.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0708 Phantump.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0709 Trevenant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0710 Pumpkaboo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0711 Gourgeist.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0712 Bergmite.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0713 Avalugg Hisui.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0713 Avalugg.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0714 Noibat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0715 Noivern.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0716 Xerneas.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0717 Yveltal.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0718 Zygarde.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0719 Diancie.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0720 Hoopa.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0721 Volcanion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0722 Rowlet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0723 Dartrix.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0724 Decidueye.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0725 Litten.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0726 Torracat.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0727 Incineroar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0728 Popplio.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0729 Brionne.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0730 Primarina.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0731 Pikipek.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0732 Trumbeak.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0733 Toucannon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0734 Yungoos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0735 Gumshoos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0736 Grubbin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0737 Charjabug.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0738 Vikavolt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0739 Crabrawler.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0740 Crabominable.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0741 Oricorio.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0742 Cutiefly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0743 Ribombee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0744 Rockruff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0745 Lycanroc Dusk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0745 Lycanroc Midnight.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0745 Lycanroc.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0746 Wishiwashi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0747 Mareanie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0748 Toxapex.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0749 Mudbray.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0750 Mudsdale.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0751 Dewpider.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0752 Araquanid.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0753 Fomantis.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0754 Lurantis.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0755 Morelull.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0756 Shiinotic.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0757 Salandit.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0758 Salazzle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0759 Stufful.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0760 Bewear.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0761 Bounsweet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0762 Steenee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0763 Tsareena.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0764 Comfey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0765 Oranguru.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0766 Passimian.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0767 Wimpod.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0768 Golisopod.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0769 Sandygast.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0770 Palossand.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0771 Pyukumuku.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0772 Type Null.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0773 Silvally.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0774 Minior.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0775 Komala.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0776 Turtonator.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0777 Togedemaru.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0778 Mimikyu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0779 Bruxish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0780 Drampa.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0781 Dhelmise.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0782 Jangmo o.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0783 Hakamo o.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0784 Kommo o.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0785 Tapu Koko.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0786 Tapu Lele.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0787 Tapu Bulu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0788 Tapu Fini.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0789 Cosmog.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0790 Cosmoem.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0791 Solgaleo.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0792 Lunala.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0793 Nihilego.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0794 Buzzwole.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0795 Pheromosa.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0796 Xurkitree.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0797 Celesteela.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0798 Kartana.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0799 Guzzlord.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0800 Necrozma.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0801 Magearna.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0802 Marshadow.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0803 Poipole.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0804 Naganadel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0805 Stakataka.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0806 Blacephalon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0807 Zeraora.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0808 Meltan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0809 Melmetal.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0810 Grookey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0811 Thwackey.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0812 Rillaboom.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0813 Scorbunny.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0814 Raboot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0815 Cinderace.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0816 Sobble.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0817 Drizzile.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0818 Inteleon.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0819 Skwovet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0820 Greedent.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0821 Rookidee.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0822 Corvisquire.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0823 Corviknight.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0824 Blipbug.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0825 Dottler.png')} style={styles.OverlayImage} /> 
</View> 	
	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0826 Orbeetle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0827 Nickit.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0828 Thievul.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0829 Gossifleur.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0830 Eldegoss.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0831 Wooloo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0832 Dubwool.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0833 Chewtle.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0834 Drednaw.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0835 Yamper.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0836 Boltund.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0837 Rolycoly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0838 Carkol.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0839 Coalossal.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0840 Applin.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0841 Flapple.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0842 Appletun.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0843 Silicobra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0844 Sandaconda Gigantamax.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0844 Sandaconda.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0845 Cramorant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0846 Arrokuda.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0847 Barraskewda.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0848 Toxel.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0849 Toxtricity Low Key.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0850 Sizzlipede.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0851 Centiskorch.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0852 Clobbopus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0853 Grapploct.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0854 Sinistea.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0855 Polteageist.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0856 Hatenna.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0857 Hattrem.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0858 Hatterene.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0859 Impidimp.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0860 Morgrem.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0861 Grimmsnarl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0862 Obstagoon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0863 Perrserker.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0864 Cursola.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0865 Sirfetch.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0866 Mr. Rime.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0867 Runerigus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0868 Milcery.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0869 Alcremie.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0870 Falinks.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0871 Pincurchin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0872 Snom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0873 Frosmoth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0874 Stonjourner.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0875 Eiscue Ice.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0875 Eiscue Noice.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0876 Indeedee.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0877 Morpeko.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0878 Cufant.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0879 Copperajah.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0880 Dracozolt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0881 Arctozolt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0882 Dracovish.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0883 Arctovish.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0884 Duraludon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0885 Dreepy.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0886 Drakloak.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0887 Dragapult.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0888 Zacian.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0889 Zamazenta.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0890 Eternatus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0891 Kubfu.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0892 Urshifu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0893 Zarude.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0894 Regieleki.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0895 Regidrago.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0896 Glastrier.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0897 Spectrier.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0898 Calyrex.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0899 Wyrdeer.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0900 Kleavor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0901 Ursaluna.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0902 Basculegion.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0903 Sneasler.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0904 Overqwil.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0905 Enamorus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0906 Sprigatito.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0907 Floragato.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0908 Meowscarada.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0909 Fuecoco.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0910 Crocalor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0911 Skeledirge.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0912 Quaxly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0913 Quaxwell.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0914 Quaquaval.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0915 Lechonk.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0916 Oinkologne.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0917 Tarountula.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0918 Spidops.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0919 Nymble.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0920 Lokix.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0921 Pawmi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0922 Pawmo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0923 Pawmot.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0924 Tandemaus.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0925 Maushold.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0926 Fidough.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0927 Dachsbun.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0928 Smoliv.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0929 Dolliv.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0930 Arboliva.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0931 Squawkabilly.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0932 Nacli.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0933 Naclstack.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0934 Garganacl.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0935 Charcadet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0936 Armarouge.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0937 Ceruledge.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0938 Tadbulb.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0939 Bellibolt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0940 Wattrel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0941 Kilowattrel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0942 Maschiff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0943 Mabosstiff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0944 Shroodle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0945 Grafaiai.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0946 Bramblin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0947 Brambleghast.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0948 Toedscool.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0949 Toedscruel.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0950 Klawf.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0951 Capsakid.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0952 Scovillain.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0953 Rellor.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0954 Rabsca.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0955 Flittle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0956 Espathra.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0957 Tinkatink.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0958 Tinkatuff.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0959 Tinkaton.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0960 Wiglett.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0961 Wugtrio.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0962 Bombirdier.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0963 Finizen.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0964 Palafin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0965 Varoom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0966 Revavroom.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0967 Cyclizar.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0968 Orthworm.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0969 Glimmet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0970 Glimmora.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0971 Greavard.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0972 Houndstone.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0973 Flamigo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0974 Cetoddle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0975 Cetitan.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0976 Veluza.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0977 Dondozo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0978 Tatsugiri.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0979 Annihilape.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0980 Clodsire.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0981 Farigiraf.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0982 Dudunsparce.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0983 Kingambit.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0984 Great Tusk.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0985 Scream Tail.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0986 Brute Bonnet.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0987 Flutter Mane.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0988 Slither Wing.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0989 Sandy Shocks.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0990 Iron Treads.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0991 Iron Bundle.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0992 Iron Hands.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0993 Iron Jugulis.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0994 Iron Moth.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0995 Iron Thorns.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0996 Frigibax.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0997 Arctibax.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0998 Baxcalibur.png')} style={styles.OverlayImage} /> 
</View> 	
 
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0999 Gimmighoul.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1000 Gholdengo.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1001 Wo-Chien.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1002 Chien-Pao.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1003 Ting-Lu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1004 Chi-Yu.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1005 Roaring Moon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1006 Iron Valiant.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1007 Koraidon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1008 Miraidon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1009 Walking Wake.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1010 Iron Leaves.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1011 Dipplin.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1012 Poltchageist.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1013 Sinistcha.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1014 Okidogi.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1015 Munkidori.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1016 Fezandipiti.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1017 Ogerpon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1018 Archaludon.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1019 Hydrapple.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1020 Gouging Fire.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1021 Raging Bolt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1022 Iron Boulder.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1023 Iron Crown.png')} style={styles.OverlayImage} /> 
</View> 	

 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1024 Terapagos.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/1025 Pecharunt.png')} style={styles.OverlayImage} /> 
</View> 	
 	
 <View style={styles.ImageContainer}> 	
 	 <Image source={require('../pokedexImg/0001 Bulbasaur.png')} style={styles.OverlayImage} /> 
</View> 	
	
	
        </ScrollView>
      </ View>
    </View>
  );
}
     
const styles = StyleSheet.create(
  {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    verticalAlign:'middle'
  },
  scrollHolder:{
  flexDirection: 'column',
    overflow: 'scroll',
    justifyContent:'center',
    alignItems:'center'
    
  },
  column: {
    flexDirection: 'row',
    overflow: 'scroll',  
  },
	ImageContainer:{
	width:350,
	alignContent:'center'
	},
  OverlayImage: {
    width: 250,
    height: 250,
    resizeMode:'contain',
    marginHorizontal: 'auto',
	borderColor: 'black',
	borderWidth: 2,
	borderRadius:20,
  },
  title:{
	marginLeft:50,
	fontSize: 30,
	fontWeight:700,
	fontFamily:'Anton'
  },
  DexNumber:{
	marginLeft:50,
	fontSize:20,
	color:'grey',
	fontWeight:'700',
  },

  ButtonContainer:{
	flexDirection:'row',
	marginLeft:50,
  },
  Grass:{
	backgroundColor:'limegreen',
	width:120,
	marginRight:20,
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Poison:{
	backgroundColor:'plum',
	width:120,
	alignItems:'center',
	padding:10,
	borderRadius:5,
	marginLeft:20,
  },
  PoisonText:{
	color:'white'
  },
  Fire:{
	backgroundColor:'orange',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5
  },
  Flying:{
	backgroundColor:'skyblue',
	width:100,
	marginLeft:20,
	alignItems:'center',
	padding:10,
	borderRadius:5
  },

  Water:{
	backgroundColor:'darkblue',
	width:100,
	alignItems:'center',
	padding:10,
	borderRadius:5
  },
  
  WaterText:{
	color:'white',
  },

  Bug:{
	backgroundColor:'springgreen',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Normal:{
	backgroundColor:'grey',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Electric:{
	backgroundColor:'yellow',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Ground:{
	backgroundColor:'beige',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Fairy:{
	backgroundColor:'pink',
	width:100,
	marginLeft:20,
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Fighting:{
	backgroundColor:'orange',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Psychic:{
	backgroundColor:'pink',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Rock:{
	backgroundColor:'brown',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
  Steel:{
	backgroundColor:'grey',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
  },
Ice:{
	backgroundColor:'silver',
	width:100,
	
	alignItems:'center',
	padding:10,
	borderRadius:5,
},
Ghost:{
	backgroundColor:'magenta',
	width:100,

	alignItems:'center',
	padding:10,
	borderRadius:5,
},
});
