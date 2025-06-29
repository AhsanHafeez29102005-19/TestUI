import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Alert,
  Linking,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import DocumentPicker from 'react-native-document-picker';
import Video from 'react-native-video';

const Home = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [playVideo, setPlayVideo] = useState(false); 

  const pickProfilePic = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setProfilePic(response.assets[0]);
      }
    });
  };
  

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.allFiles,
      });
      setSelectedDoc(res);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.log(err);
      }
    }
  };

  const pickVideo = () => {
    launchImageLibrary({ mediaType: 'video' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setSelectedVideo(response.assets[0]);
        setPlayVideo(false); // reset on new pick
      }
    });
  };

  const openFile = (uri) => {
    Linking.openURL(uri).catch(() => {
      Alert.alert('Error', 'Unable to open file.');
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>My Profile</Text>

      {/* Profile Image */}
      <TouchableOpacity onPress={pickProfilePic} style={styles.picWrapper}>
        {profilePic ? (
          <Image source={{ uri: profilePic.uri }} style={styles.profilePic} />
        ) : (
          <Text style={styles.placeholder}>Pick Profile Picture</Text>
        )}
      </TouchableOpacity>

      {profilePic && (
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#d9534f' }]}
          onPress={() => setProfilePic(null)}>
          <Text style={styles.buttonText}>❌ Delete Profile Image</Text>
        </TouchableOpacity>
      )}

      {/* Document Section */}
      <View style={styles.card}>
        <TouchableOpacity onPress={pickDocument} style={styles.button}>
          <Text style={styles.buttonText}>📄 Select Document</Text>
        </TouchableOpacity>

        {selectedDoc && (
          <>
            <Text style={styles.fileInfo}>Selected: {selectedDoc.name}</Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#5cb85c' }]}
              onPress={() => openFile(selectedDoc.uri)}>
              <Text style={styles.buttonText}>📂 Open Document</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#d9534f' }]}
              onPress={() => setSelectedDoc(null)}>
              <Text style={styles.buttonText}>❌ Delete Document</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Video Section */}
      <View style={styles.card}>
        <TouchableOpacity onPress={pickVideo} style={styles.button}>
          <Text style={styles.buttonText}>🎥 Select Video</Text>
        </TouchableOpacity>

        {selectedVideo && (
          <>
            <Text style={styles.fileInfo}>Selected: {selectedVideo.fileName}</Text>

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#5bc0de' }]}
              onPress={() => setPlayVideo(true)}>
              <Text style={styles.buttonText}>▶️ Play Video</Text>
            </TouchableOpacity>

            {playVideo && (
              <Video
                source={{ uri: selectedVideo.uri }}
                style={styles.video}
                controls
                resizeMode="cover"
              />
            )}

            <TouchableOpacity
              style={[styles.button, { backgroundColor: '#d9534f' }]}
              onPress={() => {
                setSelectedVideo(null);
                setPlayVideo(false);
              }}>
              <Text style={styles.buttonText}>❌ Delete Video</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#f2f4f7',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#333',
  },
  picWrapper: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    color: '#888',
    textAlign: 'center',
    fontSize: 14,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  button: {
    backgroundColor: '#4e8ef7',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  fileInfo: {
    color: '#444',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: '#000',
  },
});
