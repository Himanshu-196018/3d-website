import { Html } from "@react-three/drei";

export function LoaderSkeleton() {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-8 border-opacity-80 border-t-blue-500 rounded-full animate-spin" />
      </div>
    </Html>
  );
}
