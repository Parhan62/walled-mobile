import Tabs from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
    return (
      <Tabs screenOptions={{ tabBarActiveTintColor: '#19918F' }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',

            tabBarIcon: ({ color }) => 
            <Entypo name="home" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="topup"
          options={{
            title: 'topup',
            tabBarIcon: ({ color }) => 
              <Feather name="arrow-up-circle" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="transfer"
          options={{
            title: 'transfer',
            tabBarIcon: ({ color }) => 
              <SimpleLineIcons name="paper-plane" size={24} color="black" />,
          }}
        />
      </Tabs>
    );
  }
