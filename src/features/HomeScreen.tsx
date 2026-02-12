import React from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSecureReport } from '../hooks/useSecureReport';

const HomeScreen = () => {
  const { isLoading, fetchData } = useSecureReport();

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#FFFFFF',
          shadowColor: '#0000001A',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 8 },
          shadowRadius: 10,
          elevation: 10,
        }}
      >
        <View style={{ alignItems: 'center', backgroundColor: '#E8EDFF' }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#1E3A8A',
              paddingVertical: 44,
              marginBottom: 29,
            }}
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gs8FHbyPsH/dgxsk1nz_expires_30_days.png' }}
              resizeMode={'stretch'}
              style={{ width: 48, height: 48, marginLeft: 24, marginRight: 12 }}
            />
            <View>
              <Text style={{ color: '#FFFFFF', fontSize: 24 }}>SecureReport</Text>
              <Text style={{ color: '#FFFEFE', fontSize: 14 }}>Sistema Anónimo</Text>
            </View>
          </View>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gs8FHbyPsH/xel93f5x_expires_30_days.png' }}
            resizeMode={'stretch'}
            style={{ width: 103, height: 68, marginBottom: 34 }}
          />
          <View style={{ marginBottom: 60, marginHorizontal: 27 }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#25439B',
                borderRadius: 500,
                paddingVertical: 23,
                marginBottom: 27,
              }}
              onPress={fetchData}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 15 }}>
                {isLoading ? 'Cargando...' : 'Ingresa como protector'}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                backgroundColor: '#25439B',
                borderRadius: 500,
                paddingVertical: 23,
                marginHorizontal: 1,
              }}
              onPress={() => alert('Denuncia Anónima')}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 15 }}>Denuncia Anónima</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#FFFFFF',
              borderColor: '#C7D2FE',
              borderRadius: 16,
              borderWidth: 2,
              padding: 18,
              marginBottom: 88,
              marginHorizontal: 27,
            }}
          >
            <Image
              source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gs8FHbyPsH/cm96u1v2_expires_30_days.png' }}
              resizeMode={'stretch'}
              style={{ width: 20, height: 20, marginRight: 12 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ color: '#0A1433', fontSize: 16 }}>Tu anonimato está protegido</Text>
              <Text style={{ color: '#475569', fontSize: 14 }}>
                Todos los reportes están cifrados y no rastreamos datos personales
              </Text>
            </View>
          </View>
          <Image
            source={{ uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/gs8FHbyPsH/cenge3oi_expires_30_days.png' }}
            resizeMode={'stretch'}
            style={{ height: 140 }}
          />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;