-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "publishedDate" DROP DEFAULT,
ALTER COLUMN "publishedDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "description" TEXT;
