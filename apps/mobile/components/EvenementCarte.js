
import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function EvenementCarte({ evenement }) {
  const prix =
    evenement.prix === 0 ? "Gratuit" : `${evenement.prix} FCFA`;

  return (
    <Link href={`/evenement/${evenement.id}`} asChild>
      <Pressable style={styles.carte}>
        {evenement.image_url && (
          <Image
            source={{ uri: evenement.image_url }}
            style={styles.image}
          />
        )}

        <View style={styles.contenu}>
          <Text style={styles.titre}>{evenement.titre}</Text>
          <Text style={styles.lieu}>{evenement.lieu_nom}</Text>

          <View style={styles.pied}>
            <Text style={styles.categorie}>{evenement.categorie}</Text>
            <Text style={styles.prix}>{prix}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  carte: {
    backgroundColor: "#ffffff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  contenu: {
    padding: 16,
  },
  titre: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a3a5c",
  },
  lieu: {
    fontSize: 14,
    color: "#666666",
    marginTop: 6,
  },
  pied: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },
  categorie: {
    fontSize: 12,
    color: "#666666",
    textTransform: "uppercase",
  },
  prix: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ea7d2b",
  },
});
