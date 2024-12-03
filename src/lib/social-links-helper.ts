export const allSupportedPlatforms = [
  {
    key: "linkedin",
    title: "LinkedIn",
    icon_url: "https://cdn.simpleicons.org/linkedin",
  },
  {
    key: "github",
    title: "GitHub",
    icon_url: "https://cdn.simpleicons.org/github",
  },
  {
    key: "x",
    title: "X/Twitter",
    icon_url: "https://cdn.simpleicons.org/x",
  },
  {
    key: "instagram",
    title: "Instagram",
    icon_url: "https://cdn.simpleicons.org/instagram",
  },
  {
    key: "facebook",
    title: "Facebook",
    icon_url: "https://cdn.simpleicons.org/facebook",
  },
  {
    key: "youtube",
    title: "YouTube",
    icon_url: "https://cdn.simpleicons.org/youtube",
  },
  {
    key: "codepen",
    title: "CodePen",
    icon_url: "https://cdn.simpleicons.org/codepen",
  },
  {
    key: "stackoverflow",
    title: "Stackoverflow",
    icon_url: "https://cdn.simpleicons.org/stackoverflow",
  },
  {
    key: "behance",
    title: "Behance",
    icon_url: "https://cdn.simpleicons.org/behance",
  },
  {
    key: "dribbble",
    title: "Dribbble",
    icon_url: "https://cdn.simpleicons.org/dribbble",
  },
  {
    key: "medium",
    title: "Medium",
    icon_url: "https://cdn.simpleicons.org/medium",
  },
  {
    key: "devto",
    title: "DEV.to",
    icon_url: "https://cdn.simpleicons.org/devdotto",
  },
  {
    key: "freecodecamp",
    title: "freeCodeCamp",
    icon_url: "https://cdn.simpleicons.org/freecodecamp",
  },
  {
    key: "codeproject",
    title: "CodeProject",
    icon_url: "https://cdn.simpleicons.org/codeproject",
  },
  {
    key: "hackerrank",
    title: "HackerRank",
    icon_url: "https://cdn.simpleicons.org/hackerrank",
  },
  {
    key: "leetcode",
    title: "LeetCode",
    icon_url: "https://cdn.simpleicons.org/leetcode",
  },
  {
    key: "pinterest",
    title: "Pinterest",
    icon_url: "https://cdn.simpleicons.org/pinterest",
  },
  {
    key: "vimeo",
    title: "Vimeo",
    icon_url: "https://cdn.simpleicons.org/vimeo",
  },
  {
    key: "twitch",
    title: "Twitch",
    icon_url: "https://cdn.simpleicons.org/twitch",
  },
  {
    key: "producthunt",
    title: "Product Hunt",
    icon_url: "https://cdn.simpleicons.org/producthunt",
  },
  {
    key: "crunchbase",
    title: "Crunchbase name",
    icon_url: "https://cdn.simpleicons.org/crunchbase",
  },
  {
    key: "upwork",
    title: "Upwork",
    icon_url: "https://cdn.simpleicons.org/upwork",
  },
  {
    key: "fiverr",
    title: "Fiverr",
    icon_url: "https://cdn.simpleicons.org/fiverr",
  },
  {
    key: "patreon",
    title: "Patreon",
    icon_url: "https://cdn.simpleicons.org/patreon",
  },
  {
    key: "substack",
    title: "Substack",
    icon_url: "https://cdn.simpleicons.org/substack",
  },
  {
    key: "hashnode",
    title: "Hashnode",
    icon_url: "https://cdn.simpleicons.org/hashnode",
  },
  {
    key: "unsplash",
    title: "Unsplash",
    icon_url: "https://cdn.simpleicons.org/unsplash",
  },
  {
    key: "goodreads",
    title: "Goodreads",
    icon_url: "https://cdn.simpleicons.org/goodreads",
  },
];

// convert to object for fast lookup
export const allSupportedPlatformsFast = allSupportedPlatforms.reduce(
  (acc: Record<string, (typeof allSupportedPlatforms)[number]>, platform) => {
    acc[platform.key] = platform;
    return acc;
  },
  {}
);

export const allSupportedPlatformsGrayScaleFast = allSupportedPlatforms.reduce(
  (
    acc: Record<string, (typeof allSupportedPlatforms)[number]>,
    { key, title, icon_url }
  ) => {
    const modifiedIconUrl = `${icon_url}/000000/FFFFFF`;

    acc[key] = {
      key,
      title,
      icon_url: modifiedIconUrl,
    };
    return acc;
  },
  {}
);
