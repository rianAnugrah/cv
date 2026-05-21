import { OSProvider } from "./(os)/context/OSContext";
import Desktop from "./(os)/components/Desktop";

export default function Home() {
  return (
    <OSProvider>
      <Desktop />
    </OSProvider>
  );
}
