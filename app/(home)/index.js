import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Summary from "./summary";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <LinearGradient colors={["#64B5F6", "#7986CB"]} style={{ flex: 1 }}>
        <View style={{ padding: 12 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Feather name="bar-chart" size={24} color="#FFFFFF" />
            <Text style={{ fontSize: 18, fontWeight: "700", color: "#FFFFFF" }}>
              Employee Management System
            </Text>
            <Entypo name="lock" size={24} color="#FFFFFF" />
          </View>

          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Pressable
              onPress={() => router.push("/(home)/employees")}
              style={{
                backgroundColor: "#27AE60",
                padding: 12,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#64B5F6",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="#FFFFFF" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600", color: "#FFFFFF" }}>
                Employee List
              </Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/(home)/markattendance")}
              style={{
                backgroundColor: "#E74C3C",
                padding: 12,
                borderRadius: 15,
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#64B5F6",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Ionicons name="people-sharp" size={24} color="#FFFFFF" />
              </View>
              <Text style={{ marginTop: 7, fontWeight: "600", color: "#FFFFFF" }}>
                Mark Attendance
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              marginTop: 20,
              backgroundColor: "#FFFFFF",
              paddingHorizontal: 10,
              paddingVertical: 10,
            }}
          >
            <View
              onPress={() => router.push("/(home)/summary")}
              style={{
                backgroundColor: "#3498DB",
                borderRadius: 6,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 10,
              }}
            >
              <View
                style={{
                  padding: 7,
                  width: 45,
                  height: 45,
                  borderRadius: 7,
                  backgroundColor: "#E74C3C",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Octicons name="repo-pull" size={24} color="#ECF0F1" />
              </View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  fontWeight: "700",
                  flex: 1,
                  color: "#ECF0F1",
                }}
              >
                Summary Report
              </Text>
            </View>
          </View>

          <Summary />
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});
