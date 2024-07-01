import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import { DataTable } from "react-native-paper";

const Summary = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentDate, setCurrentDate] = useState(moment());

  const goToNextMonth = () => {
    setCurrentDate((prevDate) => {
      const nextMonth = moment(prevDate).add(1, "months");
      fetchAttendanceReport(nextMonth);
      return nextMonth;
    });
  };

  const goToPrevMonth = () => {
    setCurrentDate((prevDate) => {
      const prevMonth = moment(prevDate).subtract(1, "months");
      fetchAttendanceReport(prevMonth);
      return prevMonth;
    });
  };

  const formatDate = (date) => {
    return date.format("MMMM, YYYY");
  };

  const fetchAttendanceReport = async (selectedDate) => {
    try {
      const month = selectedDate.month() + 1;
      const year = selectedDate.year();

      const response = await axios.get(
        `http://10.0.2.2:8000/attendance-report-all-employees`,
        {
          params: {
            month,
            year,
          },
        }
      );

      setAttendanceData(response.data.report);
    } catch (error) {
      console.log("Error fetching attendance", error);
    }
  };

  useEffect(() => {
    fetchAttendanceReport(currentDate);
  }, [currentDate]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
        }}
      >
        <AntDesign
          onPress={goToPrevMonth}
          name="left"
          size={24}
          color="black"
        />
        <Text>{formatDate(currentDate)}</Text>
        <AntDesign
          onPress={goToNextMonth}
          name="right"
          size={24}
          color="black"
        />
      </View>

      <View style={{ marginHorizontal: 12 }}>
        {attendanceData?.map((item, index) => (
          <View key={index} style={{ marginVertical: 10 }}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 8,
                  padding: 10,
                  backgroundColor: "#4b6cb7",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white", fontSize: 16 }}>
                  {item?.name?.charAt(0)}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                  {item?.name}
                </Text>
                <Text style={{ marginTop: 5, color: "gray" }}>
                  {item?.designation} ({item?.employeeId})
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 15, margin: 5, padding: 5, backgroundColor: "#A1FFCE", borderRadius: 5 }}>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>P</DataTable.Title>
                  <DataTable.Title>A</DataTable.Title>
                  <DataTable.Title>HD</DataTable.Title>
                  <DataTable.Title>H</DataTable.Title>
                  <DataTable.Title>NW</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>{item?.present}</DataTable.Cell>
                  <DataTable.Cell>{item?.absent}</DataTable.Cell>
                  <DataTable.Cell>{item?.halfday}</DataTable.Cell>
                  <DataTable.Cell>1</DataTable.Cell>
                  <DataTable.Cell>8</DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Summary;

const styles = StyleSheet.create({});
