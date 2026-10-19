import { Link } from "expo-router";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

export default function EvenementCarte({ evenement }) {
  const prix = evenement.prix === 0 ? "Gratuit" : `${evenement.prix} FCFA`;

  return (
    <Link href={`/evenement/${evenement.id}`} asChild>
      <Pressable style={styles.carte}>
        {evenement.image_url && (
          <Image source={{ uri: evenement.image_url }} style={styles.image} />
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

/* le StyleSheet reste identique au Lab 8 */