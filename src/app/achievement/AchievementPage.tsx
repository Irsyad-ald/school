"use client";

import { useReveal } from "@/hooks/useAnimations";
import { achievements } from "@/lib/data/school";

export default function AchievementPage() {
  const heroRef = useReveal<HTMLDivElement>();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gray-950 text-white">
        <div className="container-main" ref={heroRef}>
          <span className="eyebrow text-telkom-red-light block mb-4">
            Achievement
          </span>
          <h1 className="heading-display text-white max-w-3xl">
            Prestasi Siswa
          </h1>
          <p className="text-body-lg text-gray-400 mt-6 max-w-2xl">
            Kebanggaan kami atas dedikasi dan kerja keras siswa-siswi SMK Telkom
            Lampung dalam mengharumkan nama sekolah di berbagai tingkat kompetisi.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-main">
          {achievements.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="group border border-gray-200 p-6 hover:border-telkom-red transition-colors"
                >
                  {achievement.image && (
                    <div className="aspect-[16/10] bg-gray-100 mb-4 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                    </div>
                  )}
                  <span className="text-xs font-semibold text-telkom-red mb-2 block">
                    {achievement.category}
                  </span>
                  <h3 className="font-display font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500">{achievement.description}</p>
                  <span className="text-xs text-gray-400 mt-3 block">
                    {achievement.date}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <p className="text-gray-400 text-lg font-display mb-2">
                  Data prestasi sedang dalam proses pembaruan.
                </p>
                <p className="text-sm text-gray-400">
                  Section ini siap menampilkan data prestasi secara dinamis
                  setelah dihubungkan dengan CMS.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
