#include <stdio.h>
#define SIZE_STR 8
#define SIZE_I 2
#define ARG_COUNT 2

int main(int argc, char* argv[]) {
    char str[SIZE_STR] = "aaaaaaa";
    int i[SIZE_I] = {0,0};

    printf("str = %p\n", str);
    printf("i = %p\n", i);
    printf("sizeof(int) = %ld\n", sizeof(int));

    scanf("%s", ( char *)i);

    printf("str = %s\n", str);
    printf("%s\n", str + 3);
    printf("i[0] = 0x%x\n", i[0]);
    printf("i[1] = 0x%x\n", i[1]); printf("str = %p\n", str);

    scanf("%x %x", (unsigned *)str, ((unsigned *)(str + 4)));
    printf("str = %s\n", str);

    return 0;
}

