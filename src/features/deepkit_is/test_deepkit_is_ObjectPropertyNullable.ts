import { is } from "@deepkit/type";

import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_deepkit_is } from "../internal/_test_deepkit_is";

export const test_deepkit_is_ObjectPropertyNullable = _test_deepkit_is(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input) => is<ObjectPropertyNullable>(input),
    ObjectPropertyNullable.SPOILERS,
);