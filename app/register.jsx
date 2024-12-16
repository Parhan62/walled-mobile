import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import Button from "../components/Button";
// import Input from '../components/Input';
import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={require("../assets/logo.png")} style={styles.logo} />

      <TextInput
        marginBottom="10"
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
      />

      <TextInput
        marginBottom="10"
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
      />

      <TextInput
        marginBottom="10"
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
      />

      <TextInput
        marginBottom="10"
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
        />
        <Text style={styles.paragraph}>
          I have read and agree to the
          <SafeAreaProvider>
            <SafeAreaView style={styles.centeredView}>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                  Alert.alert("Terms and Conditions has been closed.");
                  setModalVisible(!modalVisible);
                }}
              >
                <ScrollView>
                  <View style={styles.modalView}>
                    <Text style={styles.modalText}>
                      In these Terms of Use, any use of the words "you", "yours"
                      or similar expressions shall mean any user of this website
                      and the app whatsoever. Terms such as "we", "us, "our" or
                      similar expressions shall mean the Football Association
                      Premier League Limited. This website,
                      www.premierleague.com (the “Website”), and the Premier
                      League mobile application (the “App”) are operated by the
                      Football Association Premier League Limited, a company
                      registered in England and Wales under company number
                      02719699 with registered office at The Premier League,
                      Brunel Building, 57 North Wharf Road, London, W2 1HQ. Our
                      VAT number is 672 6255 22. Please read this page carefully
                      as it sets out the terms that apply to your use of the
                      Website and the App, and any part of their content and all
                      materials appearing on them. By using the Website you
                      confirm that you accept these Terms of Use and you agree
                      to comply with them. If you do not agree to these Terms of
                      Use, please refrain from using the Website and App. YOUR
                      USE OF THE WEBSITE IF YOU ARE UNDER 18 If you are under
                      18, you may need your parent/guardian to help you with
                      your use of the Website and the App and with reading these
                      Terms and Conditions. If anything is hard to understand,
                      please ask you parent/guardian to explain. If you still
                      have any questions, you or your parent/guardian can
                      contact us at: [info@premierleague.com]. If you are aged
                      13 or under, you cannot register for a Premier League
                      account (“Account”) without the permission of your
                      parent/guardian. You need to register if you want to play
                      the Fantasy game. You do not need to register to use the
                      Website or App. We may collect your personal information
                      when you use the Website and the App. You can find out
                      more about how we use your personal information in our
                      Questions and Answers. You can find a link here: link.
                      OTHER APPLICABLE TERMS These Terms of Use are additional
                      to, and should be read in conjunction with, our Privacy
                      Policy and Cookie Policy. If you are under 18, we have
                      tried to explain these policies for you in our Questions
                      and Answers. You can find a link here: link. CHANGES TO
                      THESE TERMS OF USE We may change these terms at any time
                      by amending this page. Please check this page regularly to
                      take notice of any such changes as you will be deemed to
                      accept them through your continued use of the Website and
                      the App. CHANGES TO THE WEBSITE We aim to update the
                      Website regularly, and may change the content at any time.
                      If the need arises, we may suspend access to the Website,
                      or close it indefinitely. We will not be liable if for any
                      reason the Website is unavailable at any time or for any
                      period. Any of the material on the Website may be out of
                      date at any given time, and we are under no obligation to
                      update such material. INTELLECTUAL PROPERTY RIGHTS The
                      Website is protected by copyright, database rights and
                      other intellectual property and related rights ("Rights")
                      which are owned by us and our suppliers. All such Rights
                      are reserved. Except where otherwise indicated on the
                      Website: You may download and print material from the
                      Website as is reasonable for your own private and personal
                      use; You may also forward such material from the Website
                      to other people for their private and personal use
                      provided you credit us as its source and add the Website
                      address: www.premierleague.com. You must draw their
                      attention to these terms which also apply to them; and You
                      may provide links to the Website provided they go to the
                      home page only and provided you do so in a way that is
                      fair, legal and does not damage our reputation or take
                      advantage of it. You must not establish a link in such a
                      way as to suggest any form of association, approval or
                      endorsement on the part of us where none exists. The
                      Website must not be used in any other way, including for
                      commercial purposes, and you may not otherwise reproduce,
                      re-utilise or redistribute it (including, by way of
                      example, creating a database (electronic or otherwise)
                      that includes material downloaded or otherwise obtained
                      from the Website), or frame or deep-link to it (or to any
                      of its content) on any other website, without our prior
                      written approval. If you print off, copy or download any
                      part of the Website in breach of these terms, your right
                      to use the Website will cease immediately and you must
                      return or destroy any copies of the materials you have
                      made at our request. The trade marks, logos and brand
                      names shown on the Website are owned by us or our
                      suppliers, partners or member Clubs. No rights are granted
                      to use any of them without the prior written permission of
                      the owner. ACCOUNT You may register for an Account. You
                      are not permitted to register multiple Accounts on the
                      Website or App. In registering for an Account, you will be
                      providing personal data to the Premier League. Any
                      personal data which you do submit will be processed in
                      accordance with the Premier League’s Privacy Policy and in
                      accordance with relevant data protection legislation
                      including the General Data Protection Regulation (“GDPR”)
                      and the Data Protection Act 2018. If you are under 18, you
                      can find out more about how we use your personal
                      information in our Questions and Answers, which is
                      available here: link. We will only share personal data in
                      accordance with our Privacy Policy or if required to do so
                      by a competent authority or court within the United
                      Kingdom. You may (at your sole discretion) enable two
                      factor authentication on your Account. Two factor
                      authentication improves the security of users’ accounts.
                      Before enabling two factor authentication, we recommend
                      that you read our guide on two factor authentication which
                      can be found here: link. You are responsible for: Ensuring
                      that your equipment is enabled with appropriate up-to-date
                      virus checking software; Maintaining the security of your
                      Account and/or password including (without limitation) by
                      keeping passwords for your Account secure, frequently
                      changing your password and keeping it confidential; and
                      Implementing two factor authentication on your Account. NO
                      RELIANCE ON INFORMATION Reasonable skill and care has been
                      used in producing the Website but it is only designed for
                      general information purposes. No guarantee is given by us
                      or our suppliers that the Website (including any
                      statistics contained on the Website) is accurate, complete
                      or up-to-date. We therefore disclaim all liability and
                      responsibility arising from any reliance placed on the
                      content of the Website by you, or by anyone who may be
                      informed of the Website’s contents.
                    </Text>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={styles.textStyle}>Back</Text>
                    </Pressable>
                  </View>
                </ScrollView>
              </Modal>
              <Pressable onPress={() => setModalVisible(true)}>
                <Text style={styles.register}> Terms and Conditions</Text>
              </Pressable>
            </SafeAreaView>
          </SafeAreaProvider>
        </Text>
      </View>
      <Button text="Register" />

      {/* <Input text = "Notes"/> */}
      <Text marginTop="15">
        Already have account?
        <Link href="/" style={styles.register}>
          {" "}
          Login here
        </Link>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    marginBottom: 100,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 30,
    backgroundColor: "#f9f9f9",
    fontsize: 16,
  },
  register: {
    color: "#19918f",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    borderWidth: 1,
  },
  modalView: {
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: "justify",
  },
});
