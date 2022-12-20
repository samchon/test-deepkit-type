import { is } from "@deepkit/type";

import { ClassGetter } from "../../structures/ClassGetter";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ClassGetter = _test_deepkit_is(
    "ClassGetter",
    ClassGetter.generate,
    (input) => is<ClassGetter>(input),
    ClassGetter.SPOILERS,
);