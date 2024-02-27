import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./components/login";
import Home from "./components/home/login";
import Products from "./components/products";
import Product from './components/product';
import { Feather } from "@expo/vector-icons";

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor:'#fff',
                    paddingBottom:1,
                    paddingTop:1,
                    borderTopColor:'transparent'
                },
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor: '#555'
            }}
        >
            <Tab.Screen
                name = "Login"
                component= {Login}
                options = {{
                    tabBarIcon:({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name = "Home"
                component= {Home}
                options = {{
                    tabBarIcon:({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name = "Products"
                component= {Products}
                options = {{
                    tabBarIcon:({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown: false }}
                />
                <Pilha.Screen
                    name="Products"
                    component={Products}
                    options={{headerShown: false }}
                />
                <Pilha.Screen
                    name="Product"
                    component={Product}
                    options={{headerShown: false }}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}