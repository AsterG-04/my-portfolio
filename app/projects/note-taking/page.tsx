import ProjectPage from "../ProjectPage";

export default function NoteTakingProject() {
  const images = [
    "note1.png","note2.png","note3.png","note4.png","note5.png",
    "note6.png","note7.png","note8.png","note9.png","note10.png"
  ];

  // Pass a flag to ProjectPage to lazy load all except first image
  return (
    <ProjectPage
      title="📝 Note Taking App"
      description="A minimal mobile app for organizing and syncing notes across devices."
      folder="note-taking"
      images={images}
      lazyLoadStartFrom={1} // 0 = first image eager, rest lazy
    />
  );
}
